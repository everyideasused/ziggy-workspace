"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aggregator = void 0;
const types_1 = require("./types");
class Aggregator {
    constructor(debug = false) {
        this.debug = debug;
    }
    /**
     * Aggregate ingredients from multiple recipes
     * - Combine duplicates
     * - Sum quantities where possible
     * - Track which recipes each ingredient came from
     */
    aggregateIngredients(ingredientsByRecipe) {
        if (this.debug) console.log("[Aggregator] Aggregating ingredients");
        const aggregated = new Map();
        for (const [recipeName, ingredients] of ingredientsByRecipe) {
            for (const ingredient of ingredients) {
                const key = this.normalizeIngredientKey(ingredient.name);
                if (aggregated.has(key)) {
                    const existing = aggregated.get(key);
                    existing.recipes.push(recipeName);
                    // Try to sum quantities
                    const summed = this.sumQuantities({ quantity: existing.quantity, unit: existing.unit }, { quantity: ingredient.quantity, unit: ingredient.unit });
                    if (summed) {
                        existing.quantity = summed.quantity;
                        existing.unit = summed.unit;
                    }
                }
                else {
                    aggregated.set(key, {
                        name: ingredient.name,
                        quantity: ingredient.quantity,
                        unit: ingredient.unit,
                        raw: ingredient.raw,
                        recipes: [recipeName],
                    });
                }
            }
        }
        if (this.debug) {
            console.log(`[Aggregator] Aggregated to ${aggregated.size} unique ingredients`);
        }
        return aggregated;
    }
    /**
     * Organize aggregated ingredients into grocery list sections
     */
    organizeBySections(aggregated) {
        if (this.debug) console.log("[Aggregator] Organizing into sections");
        const sections = new Map();
        // Initialize sections
        for (const [key, section] of Object.entries(types_1.INGREDIENT_SECTIONS)) {
            sections.set(key, {
                emoji: section.emoji,
                name: section.name,
                items: [],
            });
        }
        // Sort ingredients into sections
        for (const ingredient of aggregated.values()) {
            const sectionKey = this.mapIngredientToSection(ingredient.name);
            const section = sections.get(sectionKey);
            if (section) {
                section.items.push(ingredient);
            }
        }
        // Sort items within each section alphabetically
        for (const section of sections.values()) {
            section.items.sort((a, b) => a.name.localeCompare(b.name));
        }
        // Return only non-empty sections
        const result = Array.from(sections.values()).filter((s) => s.items.length > 0);
        if (this.debug) {
            console.log(`[Aggregator] Created ${result.length} sections`);
        }
        return result;
    }
    /**
     * Map an ingredient name to a section key
     */
    mapIngredientToSection(ingredientName) {
        const normalized = ingredientName.toLowerCase();
        // Direct match
        if (types_1.INGREDIENT_MAPPING[normalized]) {
            return types_1.INGREDIENT_MAPPING[normalized];
        }
        // Partial match (e.g., "canned chickpeas" -> search for "chickpeas")
        for (const [key, section] of Object.entries(types_1.INGREDIENT_MAPPING)) {
            if (normalized.includes(key) || key.includes(normalized)) {
                return section;
            }
        }
        // Default to optional
        return "optional";
    }
    /**
     * Try to sum two quantities
     * Examples: "2 cups" + "1 cup" = "3 cups"
     */
    sumQuantities(q1, q2) {
        // Only sum if units match
        if (q1.unit !== q2.unit) {
            return null;
        }
        // Only sum if both are numeric
        const num1 = this.parseQuantity(q1.quantity);
        const num2 = this.parseQuantity(q2.quantity);
        if (num1 === null || num2 === null) {
            return null;
        }
        const sum = num1 + num2;
        return {
            quantity: sum.toString(),
            unit: q1.unit,
        };
    }
    /**
     * Parse a quantity string to a number
     * "2" -> 2, "1/2" -> 0.5, "2.5" -> 2.5
     */
    parseQuantity(qty) {
        // Handle fractions like "1/2"
        if (qty.includes("/")) {
            const parts = qty.split("/");
            if (parts.length === 2) {
                const num = parseFloat(parts[0]);
                const denom = parseFloat(parts[1]);
                if (!isNaN(num) && !isNaN(denom) && denom !== 0) {
                    return num / denom;
                }
            }
        }
        // Handle decimal
        const num = parseFloat(qty);
        return !isNaN(num) ? num : null;
    }
    /**
     * Normalize an ingredient name for deduplication
     */
    normalizeIngredientKey(name) {
        return name.toLowerCase().replace(/s$/, ""); // Remove trailing 's' for singularization
    }
}
exports.Aggregator = Aggregator;

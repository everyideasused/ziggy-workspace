"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const vault_reader_1 = require("./vault-reader");
class Parser {
    constructor(debug = false) {
        this.debug = debug;
        this.vaultReader = new vault_reader_1.VaultReader(debug);
    }
    /**
     * Parse meal plan note and extract recipe names
     */
    parseMealPlan(mealPlanNote) {
        if (this.debug) console.log("[Parser] Parsing meal plan");
        // Extract wikilinks from the body
        const recipes = this.vaultReader.extractWikilinks(mealPlanNote.body);
        if (this.debug) {
            console.log(`[Parser] Found ${recipes.length} recipes:`, recipes);
        }
        return recipes;
    }
    /**
     * Parse recipe note and extract ingredients from "## 📋 Ingredients" section
     */
    parseRecipe(recipeNote) {
        if (this.debug) console.log(`[Parser] Parsing recipe: ${recipeNote.filename}`);
        const ingredients = [];
        const body = recipeNote.body;
        // Find the ingredients section
        const ingredientsMatch = body.match(/##\s*📋\s*Ingredients([\s\S]*?)(?:##|$)/i);
        if (!ingredientsMatch) {
            if (this.debug) console.log(`[Parser] No ingredients section found`);
            return ingredients;
        }
        const ingredientsSection = ingredientsMatch[1];
        const lines = ingredientsSection.split("\n");
        // Parse bullet points (- or * format)
        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("-") && !trimmed.startsWith("*")) {
                continue;
            }
            // Remove bullet and trim
            const itemText = trimmed.replace(/^[-*]\s+/, "").trim();
            if (!itemText) continue;
            const ingredient = this.parseIngredientLine(itemText, recipeNote.filename);
            if (ingredient) {
                ingredients.push(ingredient);
            }
        }
        if (this.debug) {
            console.log(`[Parser] Extracted ${ingredients.length} ingredients`);
        }
        return ingredients;
    }
    /**
     * Parse a single ingredient line: "2 cups flour" -> {quantity: "2", unit: "cups", name: "flour"}
     */
    parseIngredientLine(line, recipeName) {
        // Handle optional notes in parentheses
        const cleanLine = line.split("(")[0].trim();
        if (!cleanLine) return null;
        // Try to extract quantity + unit + ingredient
        // Examples: "2 cups flour", "1/2 can chickpeas", "3 tbsp oil"
        const parts = cleanLine.split(/\s+/);
        if (parts.length < 2) {
            // Just ingredient name, no quantity
            return {
                name: cleanLine.toLowerCase(),
                quantity: "to taste",
                unit: "",
                raw: line,
            };
        }
        // Extract leading quantity and unit
        let quantity = "";
        let unit = "";
        let ingredientStartIdx = 0;
        // First part might be quantity
        if (/^\d+[\/\d]*/.test(parts[0]) || parts[0] === "to") {
            quantity = parts[0];
            ingredientStartIdx = 1;
            // Second part might be unit
            const commonUnits = [
                "cup",
                "cups",
                "tbsp",
                "tsp",
                "can",
                "cans",
                "oz",
                "lb",
                "ml",
                "l",
                "g",
                "kg",
                "pint",
                "pinch",
                "clove",
                "cloves",
                "inch",
                "inches",
                "handful",
                "handfuls",
            ];
            if (ingredientStartIdx < parts.length &&
                commonUnits.includes(parts[ingredientStartIdx].toLowerCase())) {
                unit = parts[ingredientStartIdx];
                ingredientStartIdx++;
            }
        }
        const ingredientName = parts
            .slice(ingredientStartIdx)
            .join(" ")
            .toLowerCase();
        if (!ingredientName) return null;
        return {
            name: ingredientName,
            quantity: quantity || "as needed",
            unit: unit,
            raw: line,
        };
    }
}
exports.Parser = Parser;

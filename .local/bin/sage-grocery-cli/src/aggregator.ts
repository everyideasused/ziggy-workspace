import { Ingredient, AggregatedIngredient, INGREDIENT_MAPPING, INGREDIENT_SECTIONS, GrocerySection } from "./types";

export class Aggregator {
  private debug: boolean;

  constructor(debug: boolean = false) {
    this.debug = debug;
  }

  /**
   * Aggregate ingredients from multiple recipes
   * - Combine duplicates
   * - Sum quantities where possible
   * - Track which recipes each ingredient came from
   */
  aggregateIngredients(
    ingredientsByRecipe: Map<string, Ingredient[]>
  ): Map<string, AggregatedIngredient> {
    if (this.debug) console.log("[Aggregator] Aggregating ingredients");

    const aggregated = new Map<string, AggregatedIngredient>();

    for (const [recipeName, ingredients] of ingredientsByRecipe) {
      for (const ingredient of ingredients) {
        const key = this.normalizeIngredientKey(ingredient.name);

        if (aggregated.has(key)) {
          const existing = aggregated.get(key)!;
          existing.recipes.push(recipeName);

          // Try to sum quantities
          const summed = this.sumQuantities(
            { quantity: existing.quantity, unit: existing.unit },
            { quantity: ingredient.quantity, unit: ingredient.unit }
          );

          if (summed) {
            existing.quantity = summed.quantity;
            existing.unit = summed.unit;
          }
        } else {
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
  organizeBySections(
    aggregated: Map<string, AggregatedIngredient>
  ): GrocerySection[] {
    if (this.debug) console.log("[Aggregator] Organizing into sections");

    const sections = new Map<string, GrocerySection>();

    // Initialize sections
    for (const [key, section] of Object.entries(INGREDIENT_SECTIONS)) {
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
  private mapIngredientToSection(ingredientName: string): string {
    const normalized = ingredientName.toLowerCase();

    // Direct match
    if (INGREDIENT_MAPPING[normalized]) {
      return INGREDIENT_MAPPING[normalized];
    }

    // Partial match (e.g., "canned chickpeas" -> search for "chickpeas")
    for (const [key, section] of Object.entries(INGREDIENT_MAPPING)) {
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
  private sumQuantities(
    q1: { quantity: string; unit: string },
    q2: { quantity: string; unit: string }
  ): { quantity: string; unit: string } | null {
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
  private parseQuantity(qty: string): number | null {
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
  private normalizeIngredientKey(name: string): string {
    return name.toLowerCase().replace(/s$/, ""); // Remove trailing 's' for singularization
  }
}

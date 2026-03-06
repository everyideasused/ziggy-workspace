"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formatter = void 0;
class Formatter {
    constructor(debug = false) {
        this.debug = debug;
    }
    /**
     * Format grocery list to markdown with proper frontmatter
     */
    formatToMarkdown(list) {
        const lines = [];
        // Frontmatter
        lines.push("---");
        lines.push(`type: grocery-list`);
        lines.push(`week_of: ${list.week_of}`);
        lines.push(`recipes:`);
        for (const recipe of list.recipes) {
            lines.push(`  - ${recipe}`);
        }
        lines.push(`status: active`);
        lines.push(`tags:`);
        lines.push(`  - grocery`);
        lines.push(`  - meal-planning`);
        lines.push("---");
        lines.push("");
        // Navigation header
        lines.push("> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Meal Planning System - Overview|Meal Planning Hub]]");
        lines.push("");
        lines.push("---");
        lines.push("");
        // Title
        lines.push(`# 🛒 Grocery List - Week of ${list.week_of}`);
        lines.push("");
        // Recipes section
        lines.push("## Recipes");
        for (const recipe of list.recipes) {
            lines.push(`- [[${recipe}]]`);
        }
        lines.push("");
        // Grocery sections
        for (const section of list.sections) {
            lines.push(`## ${section.emoji} ${section.name}`);
            lines.push("");
            for (const item of section.items) {
                const formattedQty = this.formatQuantity(item);
                let checkboxLine = `- [ ] ${formattedQty}${item.name}`;
                // Add note about which recipes this came from
                if (item.recipes.length > 1) {
                    checkboxLine += ` *(${item.recipes.join(", ")})*`;
                }
                lines.push(checkboxLine);
            }
            lines.push("");
        }
        return lines.join("\n");
    }
    /**
     * Format quantity + unit for display
     */
    formatQuantity(item) {
        if (item.unit) {
            return `${item.quantity} ${item.unit} `;
        }
        if (item.quantity && item.quantity !== "to taste" && item.quantity !== "as needed") {
            return `${item.quantity} `;
        }
        return "";
    }
}
exports.Formatter = Formatter;

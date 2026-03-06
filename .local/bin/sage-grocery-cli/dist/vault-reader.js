"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultReader = void 0;
const fs = require("fs");
const path = require("path");
const VAULT_PATH = "/Volumes/ziggy/openclaw-workspace/Pinky & The Brain/Notes";
class VaultReader {
    constructor(debug = false) {
        this.debug = debug;
    }
    /**
     * Read a note by name from the vault (fuzzy matching)
     */
    readNote(noteName) {
        if (this.debug) console.log(`[VaultReader] Reading note: ${noteName}`);
        const filePath = this.findNoteFile(noteName);
        if (!filePath) {
            throw new Error(`Note not found: "${noteName}"`);
        }
        const content = fs.readFileSync(filePath, "utf-8");
        return this.parseNote(content, noteName);
    }
    /**
     * Find a note file by fuzzy matching in the vault
     */
    findNoteFile(noteName) {
        try {
            const files = fs.readdirSync(VAULT_PATH);
            const normalizedSearch = noteName.toLowerCase();
            // Exact match first
            for (const file of files) {
                if (file.toLowerCase() === `${normalizedSearch}.md`) {
                    return path.join(VAULT_PATH, file);
                }
            }
            // Fuzzy match (contains)
            for (const file of files) {
                if (file.toLowerCase().includes(normalizedSearch) &&
                    file.endsWith(".md")) {
                    return path.join(VAULT_PATH, file);
                }
            }
            return null;
        }
        catch (e) {
            if (this.debug) console.error(`[VaultReader] Error finding file:`, e);
            return null;
        }
    }
    /**
     * Parse a note into frontmatter + body
     */
    parseNote(content, filename) {
        const lines = content.split("\n");
        let frontmatterEnd = -1;
        let frontmatterStart = -1;
        // Find frontmatter delimiters
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim() === "---") {
                if (frontmatterStart === -1) {
                    frontmatterStart = i;
                }
                else {
                    frontmatterEnd = i;
                    break;
                }
            }
        }
        let frontmatter = {};
        let body = content;
        if (frontmatterStart === 0 && frontmatterEnd > 0) {
            const frontmatterLines = lines.slice(frontmatterStart + 1, frontmatterEnd);
            body = lines.slice(frontmatterEnd + 1).join("\n").trim();
            frontmatter = this.parseFrontmatter(frontmatterLines.join("\n"));
        }
        if (this.debug) {
            console.log(`[VaultReader] Parsed ${filename}:`, {
                frontmatter,
                bodyLength: body.length,
            });
        }
        return { filename, frontmatter, body };
    }
    /**
     * Parse YAML frontmatter (simple parser, no external deps)
     */
    parseFrontmatter(yaml) {
        const result = {};
        const lines = yaml.split("\n");
        for (const line of lines) {
            if (!line.trim()) continue;
            const colonIdx = line.indexOf(":");
            if (colonIdx === -1) continue;
            const key = line.substring(0, colonIdx).trim();
            let value = line.substring(colonIdx + 1).trim();
            // Handle arrays: [item1, item2]
            if (value.startsWith("[") && value.endsWith("]")) {
                const items = value
                    .slice(1, -1)
                    .split(",")
                    .map((s) =>
                    s
                        .trim()
                        .replace(/^["']|["']$/g, "")
                        .replace(/\[\[|\]\]/g, ""));
                result[key] = items;
            }
            // Handle numbers
            else if (!isNaN(Number(value))) {
                result[key] = Number(value);
            }
            // Handle booleans
            else if (value === "true") {
                result[key] = true;
            }
            else if (value === "false") {
                result[key] = false;
            }
            // String
            else {
                result[key] = value.replace(/^["']|["']$/g, "");
            }
        }
        return result;
    }
    /**
     * Extract [[wikilink]] references from text
     */
    extractWikilinks(text) {
        const wikiLinkRegex = /\[\[([^\]]+)\]\]/g;
        const matches = text.matchAll(wikiLinkRegex);
        const links = [];
        for (const match of matches) {
            const link = match[1].split("|")[0].trim(); // Handle [[link|display]] syntax
            if (link)
                links.push(link);
        }
        return links;
    }
}
exports.VaultReader = VaultReader;

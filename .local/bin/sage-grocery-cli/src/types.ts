// Core types for the grocery CLI

export interface FrontmatterData {
  [key: string]: unknown;
  type?: string;
  week_of?: string;
  recipes?: string[];
  servings?: number;
  calories?: number;
  protein?: number;
}

export interface ParsedNote {
  filename: string;
  frontmatter: FrontmatterData;
  body: string;
}

export interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
  raw: string;
}

export interface AggregatedIngredient extends Ingredient {
  recipes: string[];
  numericQuantity?: number;
}

export interface GrocerySection {
  name: string;
  emoji: string;
  items: AggregatedIngredient[];
}

export interface GroceryList {
  week_of: string;
  recipes: string[];
  sections: GrocerySection[];
}

export const INGREDIENT_SECTIONS: Record<string, { emoji: string; name: string }> = {
  produce: { emoji: "🥬", name: "Produce" },
  canned: { emoji: "🥫", name: "Canned & Jarred" },
  grains: { emoji: "🍝", name: "Grains & Pasta" },
  pantry: { emoji: "🧂", name: "Pantry Staples" },
  dairy: { emoji: "🧀", name: "Dairy Alternatives" },
  optional: { emoji: "🌶️", name: "Optional" },
};

// Hardcoded ingredient-to-section mapping
export const INGREDIENT_MAPPING: Record<string, string> = {
  // Produce
  onion: "produce",
  onions: "produce",
  garlic: "produce",
  bell pepper: "produce",
  broccoli: "produce",
  carrot: "produce",
  carrots: "produce",
  spinach: "produce",
  tomato: "produce",
  tomatoes: "produce",
  cucumber: "produce",
  lettuce: "produce",
  celery: "produce",
  mushroom: "produce",
  mushrooms: "produce",
  zucchini: "produce",
  squash: "produce",
  potato: "produce",
  potatoes: "produce",
  ginger: "produce",
  lemon: "produce",
  lime: "produce",
  cilantro: "produce",
  parsley: "produce",
  basil: "produce",
  thyme: "produce",
  rosemary: "produce",
  oregano: "produce",
  dill: "produce",
  kale: "produce",
  lettuce: "produce",
  arugula: "produce",
  avocado: "produce",
  blueberries: "produce",
  strawberries: "produce",
  banana: "produce",
  apples: "produce",
  
  // Canned & Jarred
  chickpeas: "canned",
  black beans: "canned",
  kidney beans: "canned",
  peanut butter: "canned",
  coconut milk: "canned",
  "canned tomatoes": "canned",
  "tomato sauce": "canned",
  "tomato paste": "canned",
  marinara: "canned",
  "pasta sauce": "canned",
  olives: "canned",
  capers: "canned",
  artichoke: "canned",
  "sun-dried tomatoes": "canned",
  corn: "canned",
  
  // Grains & Pasta
  rice: "grains",
  pasta: "grains",
  bread: "grains",
  oats: "grains",
  flour: "grains",
  quinoa: "grains",
  couscous: "grains",
  noodles: "grains",
  
  // Pantry Staples
  salt: "pantry",
  pepper: "pantry",
  sugar: "pantry",
  honey: "pantry",
  oil: "pantry",
  "olive oil": "pantry",
  "sesame oil": "pantry",
  "coconut oil": "pantry",
  vinegar: "pantry",
  soy sauce: "pantry",
  "tamari sauce": "pantry",
  sriracha: "pantry",
  "hot sauce": "pantry",
  cumin: "pantry",
  paprika: "pantry",
  "black pepper": "pantry",
  "red pepper flakes": "pantry",
  "curry powder": "pantry",
  "garlic powder": "pantry",
  "onion powder": "pantry",
  "baking powder": "pantry",
  "baking soda": "pantry",
  vanilla: "pantry",
  almond extract: "pantry",
  cocoa: "pantry",
  "cocoa powder": "pantry",
  chocolate: "pantry",
  nuts: "pantry",
  almonds: "pantry",
  cashews: "pantry",
  walnuts: "pantry",
  seeds: "pantry",
  "sesame seeds": "pantry",
  "sunflower seeds": "pantry",
  "chia seeds": "pantry",
  "flax seeds": "pantry",
  
  // Dairy Alternatives
  tofu: "dairy",
  tempeh: "dairy",
  "nutritional yeast": "dairy",
  "plant-based milk": "dairy",
  "almond milk": "dairy",
  "oat milk": "dairy",
  "coconut milk": "dairy",
  "soy milk": "dairy",
  "cashew cream": "dairy",
  "plant-based yogurt": "dairy",
  cheese: "dairy",
  milk: "dairy",
  butter: "dairy",
  yogurt: "dairy",
  "vegan butter": "dairy",
  "vegan cheese": "dairy",
  "vegan cream": "dairy",
  "silken tofu": "dairy",
};

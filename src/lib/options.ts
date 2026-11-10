import { segments } from "./site";

export const businessTypes = ["Restaurant (single outlet)", "Restaurant chain / group", "Café / bakery", "Hotel F&B", "Cloud kitchen", "Franchise brand", "Distributor / supplier", "Investor", "Other"] as const;
export const outletCounts = ["1", "2–5", "6–20", "21–100", "100+"] as const;
export const jobFunctions = ["Owner / C-level", "Operations", "IT / Technology", "Finance", "Marketing", "Procurement", "Chef / Kitchen", "Other"] as const;
export const segmentNames = segments.map((s) => s.name);
export const participation = ["Stand / Booth", "Startup Alley", "Sponsorship", "Speaking", "Not sure yet"] as const;
export const standSizes = ["9 sqm", "18 sqm", "36 sqm", "54 sqm+", "Not sure"] as const;

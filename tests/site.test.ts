import { expect, test } from "vitest";
import Eleventy from "@11ty/eleventy/src/Eleventy";

test("Generate a site from JS config", async () => {
  const elev = new Eleventy(null, null, {
    configPath: "stubs/general/eleventy.config.js",
  });
  const results = await elev.toJSON();
  expect(results).toHaveLength(1);
});

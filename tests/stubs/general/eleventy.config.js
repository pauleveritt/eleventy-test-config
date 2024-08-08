import "tsx/esm";
import { jsxToString } from "jsx-async-runtime";
import { MainLayout } from "../../../_includes/MainLayout.11ty.js";

export default async function (eleventyConfig) {
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
    compile: function () {
      return async function (data) {
        const x = MainLayout;
        const content = await this.defaultRenderer(data);
        const result = await jsxToString(content);
        return `<!doctype html>\n${result}`;
      };
    },
  });

  eleventyConfig.addTemplateFormats("11ty.ts,11ty.tsx");

  return {
    dir: {
      input: "tests/stubs/general/",
      includes: "../../../_includes/",
      output: "tests/stubs/general/dist",
    },
  };
}

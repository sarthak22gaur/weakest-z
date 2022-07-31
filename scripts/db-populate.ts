import { prisma } from "../src/server/db/client";
import Papa from "papaparse";

const file = "./dbz.csv";
import { readFileSync } from "fs";


const content = readFileSync(file, "utf8");
const populate = async () => {
  Papa.parse(content, {
    header: true,
    delimiter: "\n",
    complete: async (results) => {
      let index = 0;
      const data = results.data;

      const fighters = results.data.map((p, index) => ({
        id: index + 1,
        name: (p as { Name: string }).Name,
        img_url: (p as { ImageURL: string }).ImageURL,
      }));

      const created = await prisma.dbz.createMany({
        data: fighters,
      });
    },
  });
};
populate();

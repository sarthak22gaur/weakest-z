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
      // let dbData = [];
      let index = 0;
      const data = results.data;

      const formattedPokemon = results.data.map((p, index) => ({
        id: index + 1,
        name: (p as { Name: string }).Name,
        img_url: (p as { ImageURL: string }).ImageURL,
      }));

      // console.log(formattedPokemon);
      const created = await prisma.dbz.createMany({
        data: formattedPokemon,
      });
      // console.log(created);

    },
  });
};
populate();

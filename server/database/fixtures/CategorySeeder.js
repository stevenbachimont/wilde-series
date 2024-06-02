const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
    constructor() {
        // Call the constructor of the parent class (AbstractSeeder) with appropriate options
        super({ table: "category", truncate: true });
    }

    run() {
        const categories = [{ name: "Comédie" }, { name: "Science-Fiction" }, { name: "Drame" }, { name: "Policier" }, { name: "Fantastique" }, { name: "Animation" }, { name: "Documentaire" }, { name: "Horreur" }, { name: "Thriller" }, { name: "Action" }, { name: "Aventure" }, { name: "Biographie" }, { name: "Comédie musicale" }, { name: "Espionnage" }, { name: "Guerre" }, { name: "Historique" }, { name: "Romance" }, { name: "Western" }];

        categories.forEach((category) => {
            const categoryWithReName ={
                ...category,
                refName: `category_${category.name}`,
            };
            this.insert(categoryWithReName); // insert into category(name) values (?)
        });
    }
}

// Export the CategorySeeder class
module.exports = CategorySeeder;
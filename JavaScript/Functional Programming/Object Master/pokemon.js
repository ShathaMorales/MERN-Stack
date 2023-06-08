const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// create a list of pokémon that have names that start with the letter "B"
const bListPkmn = pokémon.filter(p => p.name[0] === "B");
console.log(bListPkmn);

// return an array of just the ids
const pkmnIds = pokémon.map(p => p.id);
console.log(pkmnIds);

// an array of pokémon objects where the id is evenly divisible by 3
const pkmn3 = pokémon.filter(p => p.id % 3 === 0);
console.log(pkmn3);

// an array of pokémon objects that are "fire" type
const pkmnFire = pokémon.filter(p => p.types.includes("fire"));
console.log(pkmnFire);

// an array of pokémon objects that have more than one type
const pkmnTypes = pokémon.filter(p => p.types.length > 1);
console.log(pkmnTypes);

// an array with just the names of the pokémon
const pkmnNames = pokémon.map(p => p.name);
console.log(pkmnNames);

// an array with just the names of pokémon with an id greater than 99
const pkmnIdsGreaterThan99 = pokémon.filter(p => p.id > 99);
console.log(pkmnIdsGreaterThan99);

// an array with just the names of the pokémon whose only type is poison
const pkmnTypesPoison = pokémon.filter(p => p.types.length === 1 && p.types[0] === "poison");
console.log(pkmnTypesPoison);

// an array containing just the first type of all the pokémon whose second type is "flying"
const pkmnTypesFlying = pokémon.filter(p => p.types[1] === "flying");
console.log(pkmnTypesFlying);

// a count of the number of pokémon that are "normal" type
const pkmnTypesNormal = pokémon.filter(p => p.types.includes("normal")).length;
console.log(pkmnTypesNormal);
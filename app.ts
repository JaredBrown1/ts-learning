// const person: {
// 	name: string;
// 	age: number;
// } = {
const person = {
	name: "Jared",
	age: 23,
	hobbies: ["Sports", "Videogames"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}

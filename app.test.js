const { filterAnimalsByName, countNumberOfAnimalsPerPerson } = require('./app');

const sampleData = [
    {
        name: "Tunisia",
        people: [
            {
                name: "Momo",
                animals: [
                    { name: "Lion" },
                    { name: "Elephant" },
                    { name: "Mouse" },
                    { name: "Monkey" }
                ]
            },
            {
                name: "Link",
                animals: [
                    { name: "Cat" },
                    { name: "Lion" },
                    { name: "Donkey" }
                ]
            }
        ]
    }
];

test('filterAnimals filters animals by name', () => {
    const result = filterAnimalsByName(sampleData, 'onkey');
    console.log(JSON.stringify(result, null, 2));
    expect(result).toEqual([
        {
            name: "Tunisia",
            people: [
                {
                    name: "Momo",
                    animals: [
                        {name: "Monkey" }
                    ]
                },
                {
                    name: "Link",
                    animals: [
                        {name: "Donkey"}
                    ]
                }
            ]
        }
    ]);
});

test('countNumberOfAnimalsPerPerson appends count to each person', () => {
    const result = countNumberOfAnimalsPerPerson(sampleData);
    expect(result).toEqual([
        {
            name: "Tunisia",
            people: [
                {
                    name: "Momo [4]",
                    animals: [
                        { name: "Lion" },
                        { name: "Elephant" },
                        { name: "Mouse" },
                        { name: "Monkey" }

                    ]
                },
                {
                    name: "Link [3]",
                    animals: [
                        { name: "Cat" },
                        { name: "Lion" },
                        { name: "Donkey" }
                    ]
                }
            ]
        }
    ]);
});
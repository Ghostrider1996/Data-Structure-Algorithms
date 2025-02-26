// Function to generate a mine tree with 100+ layers
const generateDeepMine = (layers, currentLayer = 1) => {
    if (currentLayer > layers) return null;

    return {
        gold: currentLayer, // Each layer has gold equal to its depth
        left: generateDeepMine(layers, currentLayer + 1),
        right: currentLayer % 2 === 0 ? generateDeepMine(layers, currentLayer + 1) : null
    };
};

// Generate a mine with 101 layers
const deepMine = generateDeepMine(20);

const countGold = (level) => {
    if (!level) return 0; // Base case: no more levels
    let total = level.gold;

    if (level.left) total += countGold(level.left);
    if (level.right) total += countGold(level.right);

    return total;
};

console.log(countGold(deepMine));

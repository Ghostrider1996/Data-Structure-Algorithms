const mine = {
    gold: 5,
    left: {
        gold: 2,
        left: {
            gold: 10
        },
        right: {
            gold: 10,
            left: {
                gold: 1
            }
        }

    },
    right: {
        gold: 2,
        left: {
            gold: 10
        },
        right: {
            gold: 10,
            left: {
                gold: 1
            }
        }

    }
}

const countGold = (level) => {
    let total = level.gold;

    if (level.left) total += countGold(level.left);

    if (level.right) total += countGold(level.right);

    return total;
}

console.log(countGold(mine));

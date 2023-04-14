function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0) {
        return 0;
    }
    let result = users.filter(user => user.gender === gender)
        .map(user => user.age)
        .reduce((acc, age, index, arr) => acc + age / arr.length, 0);
    return result;
}

function filterNames(names, letter) {
    return names.filter(name => name.startsWith(letter));
}

console.log(filterNames(['Rameshwara', 'Malikarjuna', 'Prakruthi', 'Namratha', 'Manohar'], 'M'));


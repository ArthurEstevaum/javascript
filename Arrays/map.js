const tvSeries = [
    {name: 'How i met your mother', releaseYear: 2005},
    {name: 'Breaking bad', releaseYear: 2008},
    {name: 'True detective', releaseYear: 2014},
    {name: 'Watchmen', releaseYear: 2019},
    {name: 'Mr. Robot', releaseYear: 2015}
]

const getNames = ({name}) => name
const tvSeriesNames = tvSeries.map(getNames)
console.table(tvSeriesNames)
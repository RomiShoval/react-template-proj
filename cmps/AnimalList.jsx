
const { useState, useEffect } = React
export function AnimalList({animalProps=[]}){
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Animal Name</th>
                        <th>Count</th>
                        <th>Search</th>
                    </tr>
                    </thead>
                    <tbody>
                        {animalProps.map((animal,index) => (
                            <tr key={index}>
                                <td>{animal.type}</td>
                                <td>{animal.count}</td>
                                <td>
                                <a href={`https://www.google.com/search?q=${encodeURIComponent(animal.type)}`}
                                    target ="_blank"
                                    rel="noopener noreferrer"
                                >Search</a>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
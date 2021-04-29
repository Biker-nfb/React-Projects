import React from 'react'

const List = ({persons}) => {

    return (
        <>
        {persons.map((persons)=>{
            const{id, name, image, years} = persons;
            return <article key={id} className='person'>
                <img src={image} alt={name}/>
                <div>
                    <h4>{name}</h4>
                    <p>{years} years</p>
                </div>
            </article>
        })}
        </>
    )
}

export default List
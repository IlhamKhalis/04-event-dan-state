import React, { useState } from "react";

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                With a population of around 2 million people, Almaty is the largest city in Kazakhstan. From 1929 to 1997, the city served as the capital of Kazakhstan.
            </Panel>
            <Panel 
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                The name "Almaty" comes from the Kazakh word "алма" (alma), which means "apple" and is often translated as "full of apples". In fact, the Almaty region is believed to be the possible ancestor of modern domesticated apples.
            </Panel>
        </>
    );
}

function Panel({ title, children, isActive, onShow }) {
    return (
        <section className="panel border border-gray-700 p-2">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button className="bg-blue-400 text-xs text-white p-1 rounded m-2" onClick={onShow}>Show</button>
            )}
        </section>
    );
}
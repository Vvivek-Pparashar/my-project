import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [all, setAll] = useState(items);

  function toggle(cat) {
    if (cat === "all") {
      setAll(items);
    } else {
      setAll(
        items.filter((p) => {
          if (p.category === cat) return p;
        })
      );
    }
  }

  const newall = all.map((p) => {
    return <Menu key={p.id} {...p} />;
  });

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories toggle={toggle} />
          <div className="section-center">{newall}</div>
        </section>
      </main>
    </>
  );
}

export default App;

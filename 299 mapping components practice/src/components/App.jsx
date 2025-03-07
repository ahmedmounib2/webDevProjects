import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

/* {
  id: 1,
  emoji: "💪",
  name: "Tense Biceps",
  meaning:
    "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
},
 */
function displayEmojis(emojy) {
  return (
    <Entry
      key={emojy.id}
      emoji={emojy.emoji}
      name={emojy.name}
      description={emojy.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(displayEmojis)}</dl>
    </div>
  );
}

export default App;

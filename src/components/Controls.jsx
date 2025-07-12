import React from 'react';

    const Controls = ({
      state,
      fishCount,
      setFishCount,
      plantCount,
      setPlantCount,
      filterPerformance,
      setFilterPerformance,
      handleWaterChange,
    }) => {
      return (
        <div className="mt-4">
          <div className="mb-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => setFishCount(fishCount + 1)}
            >
              Fisch hinzufügen
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded ml-2"
              onClick={() => setPlantCount(plantCount + 1)}
            >
              Pflanze hinzufügen
            </button>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Filterleistung:</label>
            <select
              className="border p-2 rounded"
              value={filterPerformance}
              onChange={(e) => setFilterPerformance(e.target.value)}
            >
              <option value="low">Niedrig</option>
              <option value="medium">Mittel</option>
              <option value="high">Hoch</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Wasserwechsel:</label>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handleWaterChange(10)}
            >
              10%
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
              onClick={() => handleWaterChange(25)}
            >
              25%
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
              onClick={() => handleWaterChange(50)}
            >
              50%
            </button>
          </div>
          <div className="mb-4">
            <p>Aktueller Zustand: {state}</p>
            <p>Fische: {fishCount}</p>
            <p>Pflanzen: {plantCount}</p>
          </div>
        </div>
      );
    };

    export default Controls;

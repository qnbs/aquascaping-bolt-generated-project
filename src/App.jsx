import React, { useState, useEffect } from 'react';
    import WaterChart from './components/WaterChart';
    import Controls from './components/Controls';
    import Tutorial from './components/Tutorial';

    const App = () => {
      const [state, setState] = useState('newTank');
      const [waterParams, setWaterParams] = useState({ ammonia: 0, nitrite: 0, nitrate: 0 });
      const [fishCount, setFishCount] = useState(0);
      const [plantCount, setPlantCount] = useState(0);
      const [filterPerformance, setFilterPerformance] = useState('low');
      const [days, setDays] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setDays(prevDays => prevDays + 1);
        }, 1000);

        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        let newAmmonia = waterParams.ammonia;
        let newNitrite = waterParams.nitrite;
        let newNitrate = waterParams.nitrate;

        switch (state) {
          case 'newTank':
            newAmmonia += 0.1 * fishCount;
            break;
          case 'ammoniaPeak':
            newAmmonia += 0.05 * fishCount;
            newNitrite += 0.02 * fishCount;
            break;
          case 'nitritePeak':
            newNitrite += 0.03 * fishCount;
            newNitrate += 0.01 * fishCount;
            break;
          case 'nitrateRise':
            newNitrate += 0.02 * fishCount;
            break;
          case 'stableTank':
            newNitrate += 0.01 * fishCount;
            break;
          default:
            break;
        }

        newNitrate -= 0.01 * plantCount;
        newAmmonia -= 0.02 * filterPerformance;
        newNitrite -= 0.01 * filterPerformance;

        setWaterParams({ ammonia: newAmmonia, nitrite: newNitrite, nitrate: newNitrate });

        if (newAmmonia > 2) setState('ammoniaPeak');
        if (newNitrite > 1) setState('nitritePeak');
        if (newNitrate > 20) setState('nitrateRise');
        if (newNitrate <= 20 && newNitrite <= 1 && newAmmonia <= 0.5) setState('stableTank');
      }, [days, state, fishCount, plantCount, filterPerformance, waterParams]);

      const handleWaterChange = (percentage) => {
        setWaterParams(prevParams => ({
          ammonia: prevParams.ammonia * (1 - percentage / 100),
          nitrite: prevParams.nitrite * (1 - percentage / 100),
          nitrate: prevParams.nitrate * (1 - percentage / 100),
        }));
      };

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Aquascaping-Manager</h1>
          <Tutorial />
          <WaterChart waterParams={waterParams} />
          <Controls
            state={state}
            fishCount={fishCount}
            setFishCount={setFishCount}
            plantCount={plantCount}
            setPlantCount={setPlantCount}
            filterPerformance={filterPerformance}
            setFilterPerformance={setFilterPerformance}
            handleWaterChange={handleWaterChange}
          />
        </div>
      );
    };

    export default App;

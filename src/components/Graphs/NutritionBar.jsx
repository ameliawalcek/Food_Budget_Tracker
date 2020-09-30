import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import { ResponsiveBar } from '@nivo/bar'

const NutritionBar = inject('recipeStore', 'userStore')(observer((props) => {
    const { recipeOverview } = props.recipeStore
    const { darkState } = props.userStore
    let nutritionBreakdown = []
    let keys = []

    const getNutritionBreakdown = () => {
        recipeOverview.nutrition &&
            recipeOverview.nutrition.nutrients.forEach(nutrient => {
                if (nutrient.amount === 0 || nutrient.title === 'Alcohol') return
                nutritionBreakdown.push({
                    'nutrient': nutrient.title,
                    [nutrient.title]: nutrient.percentOfDailyNeeds
                })
                keys.push(nutrient.title)
            })
    }

    useEffect(() => {
        getNutritionBreakdown()
    }, [darkState])

    return (
        <div style={{ height: 400, marginBottom: 50 }}>
            <ResponsiveBar
                data={nutritionBreakdown}
                keys={keys}
                indexBy="nutrient"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.25}
                colorBy='index'
                colors={{ scheme: 'spectral' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', '0.2']] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 7,
                    tickPadding: 5,
                    tickRotation: 50,
                    legend: '% of daily',

                    legendPosition: 'middle',
                    legendOffset: 70
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                enableGridX={false}
                enableGridY={true}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    )
}))
export default NutritionBar
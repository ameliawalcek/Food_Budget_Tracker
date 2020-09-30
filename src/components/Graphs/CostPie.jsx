import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import { ResponsivePie } from '@nivo/pie'

const CostPie = inject('recipeStore', 'userStore')(observer((props) => {
    const { recipeCost } = props.recipeStore
    const { darkState } = props.userStore
    let costBreakdown = []

    const getCostBreakdown = () => {
        recipeCost.ingredients && recipeCost.ingredients.forEach(ingredient => {
            costBreakdown.push({
                'id': ingredient.name,
                'label': ingredient.name,
                'value': ingredient.price
            })
        })
    }

    useEffect(() => {
        getCostBreakdown()
        
    }, [darkState])

    return (
        <div style={{ height: 300 }}>
            <ResponsivePie
                data={costBreakdown}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                startAngle={90}
                endAngle={-360}
                sortByValue={true}
                innerRadius={0.65}
                padAngle={1}
                cornerRadius={1}
                colors={{ scheme: 'spectral' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', '0.3']] }}
                radialLabelsSkipAngle={4}
                radialLabelsTextXOffset={3}
                radialLabelsTextColor={darkState ? 'white' : 'black'}
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={14}
                radialLabelsLinkHorizontalLength={8}
                radialLabelsLinkStrokeWidth={2}
                radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
                enableSlicesLabels={false}
                sliceLabel="id"
                slicesLabelsSkipAngle={9}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                isInteractive={false}
            />
        </div>
    )
}))

export default CostPie
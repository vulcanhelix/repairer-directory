import { Box } from '@chakra-ui/react'

import { Grid } from '@/blocks'
import { PricingPlanCard } from '@/columns'

export default function PricingPlanSection({ page, ...grid }) {
  return (
    <Box px={[4, 6, null, 8]}>
      <Grid {...grid}>
        {() =>
          grid.columns.map((column) => (
            <PricingPlanCard
              key={column.id}
              {...column}
            />
          ))
        }
      </Grid>
    </Box>
  )
}

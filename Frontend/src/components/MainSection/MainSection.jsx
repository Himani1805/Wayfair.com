import React from 'react'
import ShopByDepartment from './ShopByDepartment'
import ExploreOurExclusiveBrands from './ExploreOurExclusiveBrands'
import KeepShoppingForFauxFlorals from './KeepShoppingForFauxFlorals'
import SmallSpaceEntryWayFinds from './SmallSpaceEntryWayFinds'
import EntrywayEssentials from './EntrywayEssentials'
import ShopTheLook from './ShopTheLook'
import EasterPrepDone from './EasterPrepDone'
import UnwindWithoutOverspending from './UnwindWithoutOverspending'
import KeepShoppingForBathTowels from './KeepShoppingForBathTowels'
import HoursOnlyDealsOfTheDay from './HoursOnlyDealsOfTheDay'
import RecommendedForYou from './RecommendedForYou'
import DiningSaleUpto from './DiningSaleUpto'
import AllCategories from './AllCategories'
import Banner from '../Dashboard/Banner'
import { Flex } from '@chakra-ui/react'

// import ProductSlider from '../Common/ProductSlider'
import { diningSale } from '../../data/diningSale'

export default function MainSection() {
  return (
    <Flex width={"92%"}  mx={"auto"} flexDirection={"column"}>
      <AllCategories/>
      {/* <ProductSlider products={diningSale}/> */}
      <DiningSaleUpto/>
      <RecommendedForYou/>
      <HoursOnlyDealsOfTheDay/>
      <KeepShoppingForBathTowels/>
      <UnwindWithoutOverspending/>
      <EasterPrepDone/>
      <ShopTheLook/>
      <EntrywayEssentials/>
      <SmallSpaceEntryWayFinds/>
      <KeepShoppingForFauxFlorals/>
      <ExploreOurExclusiveBrands/>
      <ShopByDepartment/>
    </Flex>
  )
}

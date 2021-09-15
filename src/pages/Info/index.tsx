import { Flex, Accordion, Heading } from "@chakra-ui/react"
import { InfoDropDown } from "../../components/InfoDropDown"
import { DashboardMenu } from '../../components/DashboardMenu'
import { infos } from "../../utils/infos"
import { BottomMenu } from "../../components/BottomMenu"

export const Info = () => {
  const isMobile = window.innerWidth < 768;
  return <Flex minH='100vh' h='auto' justifyContent='space-between'>
    {isMobile ? <BottomMenu /> : <DashboardMenu />}
    <Flex 
      
      alignItems='center' 
      p='10'
      w='100%'
      flexDirection='column'
    >
      <Heading 
        as='h2' 
        m='3rem 0 4rem' 
        textTransform='uppercase' 
        fontSize='2xl'
      >Informations</Heading>
      <Accordion 
        w='80%' 
        allowToggle
      >
        {infos.map(({title, content}) => <InfoDropDown w='100%' title={title} content={content}/>)}
      </Accordion>
    </Flex>
  </Flex>
}

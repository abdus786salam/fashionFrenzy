import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

const BreadCrumb = ({home,category,subCategory}) => {
 
  return (
    <Box 
    // border="1px solid red"
    >
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href={home.path ||"#"}>{home.name||"home"}</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href={category.path ||"#"}>{category.name||"category"}</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href={subCategory.path ||"#"}>{subCategory.name||"subCategory"}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Box>
  )
}

export default BreadCrumb
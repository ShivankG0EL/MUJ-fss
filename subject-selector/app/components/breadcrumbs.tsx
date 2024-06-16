import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"


export default function Breadcrumbs(props : any){
    return(
        <>
        <Breadcrumb>
        <BreadcrumbList>
        <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
        <BreadcrumbLink href="/components">{props.currentPage}</BreadcrumbLink>
        </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
        </>
    );
}
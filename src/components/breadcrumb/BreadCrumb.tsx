import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React from "react";
import Link from "next/link";

type List = {
  link: string;
  name: string;
};

type Props = {
  list: List[];
};

const BreadCrumb = ({ list }: Props) => {
  return (
    <Breadcrumb className="m-4">
      <BreadcrumbList>
        {list.map(({ link, name }, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {index < list.length - 1 ? (
                <BreadcrumbLink asChild>
                  <Link href={link}>{name}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < list.length - 1 ? <BreadcrumbSeparator /> : null}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;

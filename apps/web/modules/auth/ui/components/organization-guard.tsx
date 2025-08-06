"use client";

import { useOrganization } from "@clerk/nextjs";
import { OrgSelectionView } from "../views/org-selection-view";

export const OrganizationGuard = ({children}: {children: React.ReactNode}) => {
    const {organization } = useOrganization();

    if(!organization) {
        return (
            <div>
               <OrgSelectionView/>
            </div>
        )
    }
    return (
        <>
            {children}
        </>
    )
}
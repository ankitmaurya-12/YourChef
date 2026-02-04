"use client"

import { UserButton } from "@clerk/nextjs"
import { Cookie, Refrigerator } from "lucide-react"

export default function UserDropdown() {
  return (
    <UserButton>
        <UserButton.MenuItems>
            <UserButton.Link 
            label="Recipes"
            labelIcon={<Cookie size={16}/>}
            href="/recipes"
            />
            <UserButton.Link 
            label="Pantry"
            labelIcon={<Refrigerator size={16}/>}
            href="/pantry"
            />
            <UserButton.Action label="manageAccount"/>
        </UserButton.MenuItems>
    </UserButton>
  )
}

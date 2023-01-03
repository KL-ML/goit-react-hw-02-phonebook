import { Box } from "components/Box";
import React from "react";
import { ContactItem } from "./ContactItem";

export const ContactList = ({ contacts }) => {
    return (
        <Box
            as="ul"
            bg="background"
                boxShadow="boxShadowSection"
                borderRadius="normal"
                overflow="hidden"
            p={4}
            minHeight="contactListMinHeigth"
        >
            <ContactItem contacts={contacts} />
        </Box>
    );
};
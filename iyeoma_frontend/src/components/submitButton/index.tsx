import { Button} from "@chakra-ui/react";
import React from "react";
import { FC } from "react";

interface SubmitBtnProps {
    btntitle: string;
    isLoading?: any;
    onClick?: any;
    loadingText?: any;
    rest?: any;

}
const SubmitBtn: FC<SubmitBtnProps> = ({
    btntitle,
    isLoading,
    onClick,
    loadingText,
    rest,
}) => {
    const { btnBox } = useStyles();
    return (
        <Button {...btnBox}
            as='button'
            w={"100%"}
            isLoading={isLoading}
            onClick={onClick}
            {...rest}
            type="submit"
            loadingText={loadingText}
            _hover={{ bg: "#390048", color: "#FFFFFF" }}
        >
            {btntitle}
        </Button>
    );
};

export default SubmitBtn;

const useStyles = () => {
    return {
        btnBox: {
            background: "#390048",
            fontWeight: "800",
            fontFamily: 'Nunito',
            fontSize: "14",
            textAlign: 'center',
            color: '#FFFFFF',
            cursor: 'pointer',
            borderBottomLeftRadius: "8",
            borderBottomRightRadius: "8",
            borderTopRightRadius: "8",
            borderTopLeftRadius: "0",
            padding: "16px 40px 12px 40px",
            marginTop: "28px",
            border: "0px solid #E2E8F0",
        },
    };
};
import styled from "styled-components/native";

export const Container = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    padding: 52px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.BRAND_LIGHT};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
    text-align: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Slogan = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    margin-bottom: 32px;
    text-align: center;
    
`
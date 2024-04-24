import { Projection } from 'leaflet';
import styled from 'styled-components'

export const Flexbox = styled.div`
    display: flex;
    flex-direction: ${(props) => props.dir || 'row'};
    background: ${(props) => props.bColor || "white" };
    gap: ${(props) => props.gap || "10px"};
    margin: ${(props) => props.mg || "0px 0px 0px 0px"}
    padding: ${(props)=> props.pd || "0px 0px 0px 0px"}
    color: ${(props)=> props.color || "black"}
    border: ${(props)=> props.border || "none"}

  `;



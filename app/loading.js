"use client"
import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const Loader = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: blue;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
`;

const Loading = () => {
    return (
        <LoaderContainer className="h-1/2"  >
            <div className="flex flex-col justify-center items-center">
                <Loader />
                <p className="mt-3 text-lg">Chargement...</p>
            </div>
        </LoaderContainer>
    );
};

export default Loading;

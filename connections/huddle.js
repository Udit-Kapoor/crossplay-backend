// import { AccessToken, Role } from "@huddle01/server-sdk/auth";
const { AccessToken, Role } = require("@huddle01/server-sdk/auth");
require("dotenv").config();
const axios = require('axios');

// const endpoint = "https://api.huddle01.com/api/v1/";

async function createHuddleRoom(host){

    try {
        const response = await axios.post(
          "https://api.huddle01.com/api/v1/create-room",
          {
            title: "CrossPlay-GameRoom",
            hostWallets: [host], // get from fe
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": process.env.HUDDLE_API_KEY,
            },
          }
        );

        return response.data;
        
    } catch (error) {
        console.log(error);
    }
}

async function getAccessToken(huddleRoomId){
    const accessToken = new AccessToken({
      apiKey: process.env.HUDDLE_API_KEY,
      roomId: huddleRoomId,
      role: Role.HOST,
      options: {
        metadata: {}, // any custom metadata
      },
    });
    const jwt = await accessToken.toJwt();
    console.log("created jwt" , jwt);
    return jwt;
}


module.exports = { createHuddleRoom, getAccessToken };
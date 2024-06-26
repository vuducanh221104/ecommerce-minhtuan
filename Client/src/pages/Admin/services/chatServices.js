import * as httpRequest from '~/utils/httpRequest';

// [GET]
export const activeRoom = async () => {
    try {
        const res = await httpRequest.get('api/activeRooms');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const chatHistory = async (roomName) => {
    try {
        const res = await httpRequest.get(`api/chat-history/${roomName}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

//[DELETED]
export const deleteRoom = async (roomName, avatar, fullname) => {
    try {
        const res = await httpRequest.deleted('api/deleteRoomm', {
            data: { roomName, avatar, fullname },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteAllRoom = async () => {
    try {
        const res = await httpRequest.deleted('api/deleteAllRooms');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

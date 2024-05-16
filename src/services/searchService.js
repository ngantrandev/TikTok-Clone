import * as httpRequest from '../ultil/httpRequest';

const searchUsers = async (q, type = 'less') => {
  try {
    const res = await httpRequest.get(`users/search`, {
      params: {
        q: q,
        type: type,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { searchUsers };

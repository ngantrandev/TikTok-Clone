import * as request from '../ultil/request';

const searchUsers = async (q, type = 'less') => {
  try {
    const res = await request.get(`users/search`, {
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

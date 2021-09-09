// import { sensors } from '.';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function handleError(error) {
  if (error.response) {
    throw new Error(error.response.data.message); // '존재하지 않는 배 이름 입니다'
  }

  if (error.request) {
    throw new Error(error.request); // 아무런 응답을 못 받았을 때
  }

  throw new Error('Error', error.message); // 로직에서 에러가 났을 경우
}

// eslint-disable-next-line no-unused-vars
export async function fetchSensorsBySeconds({ shipName, startDate, endDate }) {
  try {
    // const { data } = await sensors.post('/seconds', { shipName, startDate, endDate });
    const data = [
      'T_RESET',
      'S_CCASSS',
      'NNASDASDAS',
    ];
    await sleep(2000);
    return data;
  } catch (error) {
    handleError(error);
  }
}

// eslint-disable-next-line no-unused-vars
export async function fetchSensorsByMinutes({ shipName, startDate, endDate }) {
  try {
    // const { data } = await sensors.post('/minutes', { shipName, startDate, endDate });
    const data = [
      'T_RESET',
      'S_CCASSS',
      'NNASDASDAS',
    ];
    await sleep(2000);
    return data;
  } catch (error) {
    handleError(error);
  }
}

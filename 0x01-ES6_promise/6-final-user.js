import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const valuesOne = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  return valuesOne.map((value) => ({
    status: value.status,
    value: value.status === 'fulfilled' ? value.value : String(value.reason),
  }));
}

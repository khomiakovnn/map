import ErrorRepository from '../ErrorRepository.js';

test('List exist', () => {
  const repository = new ErrorRepository();
  const result = new Map;
  result.set(1, 'Error 1 description');
  result.set(2, 'Error 2 description');
  expect(repository.errors).toEqual(result);
});

test('Unknown error', () => {
  const repository = new ErrorRepository();
  expect(repository.translate(3)).toEqual('Unknown error');
});

test('Error 1', () => {
  const repository = new ErrorRepository();
  expect(repository.translate(1)).toEqual('Error 1 description');
});
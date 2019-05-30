import {
  isBlank,
  isNotBlank,
  validateIfDirty
} from '../../../platform/forms/validations';

import { makeField } from '../../../platform/forms/fields';

export function validateNumAttachments(files, maxAttachments) {
  return files.length > maxAttachments;
}

export function validateFileSize(files, max) {
  return !!files.find((file) => { return file.size > max; });
}

export function validateTotalFileSize(files, max) {
  const total = files.reduce((sum, file) => {
    return sum + file.size;
  }, 0);
  return total > max;
}

export function isValidCategory(category) {
  return validateIfDirty(category, isNotBlank);
}

export function isValidMessageBody(messageBody) {
  return validateIfDirty(messageBody, isNotBlank);
}

export function isValidRecipient(recipient) {
  return validateIfDirty(recipient, isNotBlank);
}

export function isValidSubject(category, subject) {
  if (category.value !== 'OTHER') {
    return true;
  }
  return validateIfDirty(makeField(subject.value, true), isNotBlank);
}

export function isValidSubjectLine(category, subject) {
  const err = { hasError: false };
  if (!isValidCategory(category)) {
    err.hasError = true;
    err.type = 'category';
  }
  if (!isValidSubject(category, subject)) {
    err.hasError = true;
    err.type = 'subject';
  }
  return err;
}

export function validateFolderName(folderName, existingFolders = []) {
  const err = {};
  // TODO: Refactor isNotBlank validator to trim input.
  const trimmedFolderName = makeField(folderName.value.trim(), folderName.dirty);

  if (!validateIfDirty(trimmedFolderName, isNotBlank)) {
    err.hasError = true;
    err.type = 'empty';
  }

  // Disallows anything other than a-z, 0-9, and space
  // (case insensitive)
  const allowedRegExp = /[^a-z0-9\s]/ig;
  if (allowedRegExp.test(trimmedFolderName.value)) {
    err.hasError = true;
    err.type = 'patternMismatch';
  }

  const doesFolderExist = (folder) => {
    return trimmedFolderName.value.toLowerCase() === folder.name.toLowerCase();
  };

  if (existingFolders.find(doesFolderExist)) {
    err.hasError = true;
    err.type = 'exists';
  }

  return err;
}

function isEmpty(value) {
  return value === null || isBlank(value);
}

export function isEmptySearch(search) {
  const isEmptyStartDate = isEmpty(search.dateRange.start);
  const isEmptyEndDate = isEmpty(search.dateRange.end);
  const isEmptyFrom = isEmpty(search.from.field.value);
  const isEmptySubject = isEmpty(search.subject.field.value);

  return isEmptyStartDate &&
         isEmptyEndDate &&
         isEmptyFrom &&
         isEmptySubject;
}

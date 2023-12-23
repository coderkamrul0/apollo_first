import express from 'express';
import { UserController } from './user.controller';
import { studentValidations } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequest';
import { facultyValidations } from '../faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';
import { userValidation } from './user.validation';
const router = express.Router();

router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  validateRequest(studentValidations.createStudentValidationSchema),
  UserController.createStudent,
);
router.post(
  '/create-faculty',
  auth(USER_ROLE.admin),
  validateRequest(facultyValidations.createFacultyValidationSchema),
  UserController.createFaculty,
);
router.post(
  '/create-admin',
  // auth(USER_ROLE.admin),
  validateRequest(createAdminValidationSchema),
  UserController.createAdmin,
);
router.get('/me', auth('student', 'admin', 'faculty'), UserController.getMe);

router.post(
  '/change-status/:id',
  auth('admin'),
  validateRequest(userValidation.changeStatusValidationSchema),
  UserController.changeStatus,
);

export const userRoutes = router;

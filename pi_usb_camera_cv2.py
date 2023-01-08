# pi_usb_camera_cv2.py
import cv2
class VideoCamera_pi(object):
    def __init__(self):
        # Using OpenCV to capture from device 0. If you have trouble capturing
        # from a webcam, comment the line below out and use a video file
        # instead.

        self.video = cv2.VideoCapture(2)
        self.video.set(3,960)
        self.video.set(4,720)
        # If you decide to use video.mp4, you must have this file in the folder
        # as the main.py.
        # self.video = cv2.VideoCapture('video.mp4')

    def __del__(self):
        self.video.release()

    def get_frame(self):
        success, image = self.video.read()
        #success, image = cv2.resize(self.video.read(), (0,0), fx=0.75, fy=0.75)
        # We are using Motion JPEG, but OpenCV defaults to capture raw images,
        # so we must encode it into JPEG in order to correctly display the
        # video stream.
        ret, jpeg = cv2.imencode('.jpg', image)
        # for python2.7 or low viction  numpy us: jpeg.tostring()
        return jpeg.tobytes()

class VideoCamera_usb(object):
    def __init__(self):
        # Using OpenCV to capture from device 0. If you have trouble capturing
        # from a webcam, comment the line below out and use a video file
        # instead.
        self.video = cv2.VideoCapture(0)
        self.video.set(3,960)
        self.video.set(4,720)
        # If you decide to use video.mp4, you must have this file in the folder
        # as the main.py.
        # self.video = cv2.VideoCapture('video.mp4')

    def __del__(self):
        self.video.release()

    def get_frame(self):
        success, image = self.video.read()
        #success, image = cv2.resize(self.video.read(), (0,0), fx=0.75, fy=0.75)
        # We are using Motion JPEG, but OpenCV defaults to capture raw images,
        # so we must encode it into JPEG in order to correctly display the
        # video stream.
        ret, jpeg = cv2.imencode('.jpg', image)
        # for python2.7 or low viction  numpy us: jpeg.tostring()
        return jpeg.tobytes()

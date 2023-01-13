#coding=utf-8
import ctypes
from ctypes import * 
lib = ctypes.cdll.LoadLibrary("./libhaisantts.so")
lib.startHaisanTTS.argtypes=[POINTER(c_char)]
TTS=(c_char * 100)(*bytes("现在是北京时间九点整",'utf-8'))
cast(TTS, POINTER(c_char))
lib.startHaisanTTS(TTS)

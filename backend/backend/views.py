from django.views.generic import View
from django.http import HttpResponse
import os
from django.conf import settings 


class ReactAppView(View):
    def get(self, request):
        try:
            # Caminho do index.html do React usando settings.BASE_DIR
            react_index_path = os.path.join(settings.BASE_DIR, '..', 'frontend', 'build', 'index.html')
            with open(react_index_path) as file:
                return HttpResponse(file.read())
        except FileNotFoundError:
            return HttpResponse("O arquivo index.html não foi encontrado. Certifique-se de que você executou 'npm run build'.", status=404)
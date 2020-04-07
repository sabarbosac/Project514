from tethys_sdk.base import TethysAppBase, url_map_maker


class Finalproject(TethysAppBase):
    """
    Tethys app class for Finalproject.
    """

    name = 'Winter Route Finder'
    index = 'finalproject:home'
    icon = 'finalproject/images/icon.gif'
    package = 'finalproject'
    root_url = 'finalproject'
    color = '#2c3e50'
    description = ''
    tags = ''
    enable_feedback = False
    feedback_emails = []

    def url_maps(self):
        """
        Add controllers
        """
        UrlMap = url_map_maker(self.root_url)

        url_maps = (
            UrlMap(
                name='home',
                url='finalproject',
                controller='finalproject.controllers.home'
            ),
            UrlMap(
                name='background',
                url='finalproject/background',
                controller='finalproject.controllers.background'
            ),

            UrlMap(
                name='app',
                url='finalproject/app',
                controller='finalproject.controllers.app'
            ),
        )

        return url_maps